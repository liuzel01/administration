<?php declare(strict_types=1);

namespace Shopware\Administration;

use Shopware\Administration\DependencyInjection\AdministrationMigrationCompilerPass;
use Shopware\Core\Framework\Bundle;
use Shopware\Core\Framework\Log\Package;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Compiler\PassConfig;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;

/**
 * @internal
 * 新增一个修改，做 Actions 测试
 * 新增第二个修改，方便做测试
 * 新增第三个修改，方便测试
 * 新增4个修改
 * 新增5个修改
 * 新增6个修改
 * 新增7个修改77
 */
#[Package('administration')]
class Administration extends Bundle
{
    public function getTemplatePriority(): int
    {
        return -1;
    }

    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $loader = new XmlFileLoader($container, new FileLocator(__DIR__ . '/DependencyInjection/'));
        $loader->load('services.xml');

        $container->addCompilerPass(new AdministrationMigrationCompilerPass(), PassConfig::TYPE_BEFORE_OPTIMIZATION, 0);
    }
}
