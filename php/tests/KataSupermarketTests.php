<?php
declare(strict_types=1);

use PHPUnit\Framework\Attributes\TestDox;
use PHPUnit\Framework\TestCase;

class KataSupermarketTests extends TestCase
{
    #[TestDox('Everything is OK')]
    public function test_Everything_is_OK() : void {
        $this->assertTrue(true);
    }
}
