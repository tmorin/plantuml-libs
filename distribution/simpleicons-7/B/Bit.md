# Bit


```text
simpleicons-7/B/Bit
```

```text
include('simpleicons-7/B/Bit')
```



| Illustration | Bit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bit.png) | ![illustration for Bit](../../simpleicons-7/B/Bit.Local.png) |




## Bit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bit
include('simpleicons-7/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bit
include('simpleicons-7/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label', 'an optional description')
@enduml
```

