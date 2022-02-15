# Slashdot


```text
simpleicons-6/S/Slashdot
```

```text
include('simpleicons-6/S/Slashdot')
```



| Illustration | Slashdot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Slashdot.png) | ![illustration for Slashdot](../../simpleicons-6/S/Slashdot.Local.png) |




## Slashdot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Slashdot
include('simpleicons-6/S/Slashdot')

' renders the element
Slashdot('Slashdot', 'Slashdot', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Slashdot
include('simpleicons-6/S/Slashdot')

' renders the element
Slashdot('Slashdot', 'Slashdot', 'an optional tech label')
@enduml
```

