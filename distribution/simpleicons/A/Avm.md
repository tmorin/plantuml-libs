# Avm


```text
simpleicons/A/Avm
```

```text
include('simpleicons/A/Avm')
```



| Illustration | Avm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Avm.png) | ![illustration for Avm](../../simpleicons/A/Avm.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Avm
include('simpleicons/A/Avm')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Avm
include('simpleicons/A/Avm')

' renders the element
Avm('Avm', 'Avm', 'an optional tech label', 'an optional description')
@enduml
```

