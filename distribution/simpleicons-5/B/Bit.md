# Bit


```text
simpleicons-5/B/Bit
```

```text
include('simpleicons-5/B/Bit')
```



| Illustration | Bit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bit.png) | ![illustration for Bit](../../simpleicons-5/B/Bit.Local.png) |




## Bit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bit
include('simpleicons-5/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bit
include('simpleicons-5/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label')
@enduml
```

