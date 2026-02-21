# Avm


```text
simpleicons-14/A/Avm
```

```text
include('simpleicons-14/A/Avm')
```



| Illustration | Avm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Avm.png) | ![illustration for Avm](../../simpleicons-14/A/Avm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AvmXs>`
- `<$AvmSm>`
- `<$AvmMd>`
- `<$AvmLg>`





## Avm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Avm
include('simpleicons-14/A/Avm')

' renders the element
Avm('Avm', 'Avm', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Avm
include('simpleicons-14/A/Avm')

' renders the element
Avm('Avm', 'Avm', 'an optional tech label', 'an optional description')
@enduml
```

