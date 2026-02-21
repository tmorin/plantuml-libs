# Pool


```text
material/Places/Pool
```

```text
include('material/Places/Pool')
```



| Illustration | Pool |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Pool.png) | ![illustration for Pool](../../material/Places/Pool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PoolXs>`
- `<$PoolSm>`
- `<$PoolMd>`
- `<$PoolLg>`





## Pool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Pool
include('material/Places/Pool')

' renders the element
Pool('Pool', 'Pool', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Pool
include('material/Places/Pool')

' renders the element
Pool('Pool', 'Pool', 'an optional tech label', 'an optional description')
@enduml
```

