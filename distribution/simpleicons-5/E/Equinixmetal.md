# Equinixmetal


```text
simpleicons-5/E/Equinixmetal
```

```text
include('simpleicons-5/E/Equinixmetal')
```



| Illustration | Equinixmetal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Equinixmetal.png) | ![illustration for Equinixmetal](../../simpleicons-5/E/Equinixmetal.Local.png) |




## Equinixmetal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Equinixmetal
include('simpleicons-5/E/Equinixmetal')

' renders the element
Equinixmetal('Equinixmetal', 'Equinixmetal', 'an optional tech label')
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

' loads the Item which embeds the element Equinixmetal
include('simpleicons-5/E/Equinixmetal')

' renders the element
Equinixmetal('Equinixmetal', 'Equinixmetal', 'an optional tech label')
@enduml
```

