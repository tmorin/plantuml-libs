# Keystone


```text
simpleicons-8/K/Keystone
```

```text
include('simpleicons-8/K/Keystone')
```



| Illustration | Keystone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/K/Keystone.png) | ![illustration for Keystone](../../simpleicons-8/K/Keystone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeystoneXs>`
- `<$KeystoneSm>`
- `<$KeystoneMd>`
- `<$KeystoneLg>`





## Keystone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Keystone
include('simpleicons-8/K/Keystone')

' renders the element
Keystone('Keystone', 'Keystone', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Keystone
include('simpleicons-8/K/Keystone')

' renders the element
Keystone('Keystone', 'Keystone', 'an optional tech label', 'an optional description')
@enduml
```

