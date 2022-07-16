# Grab


```text
simpleicons-7/G/Grab
```

```text
include('simpleicons-7/G/Grab')
```



| Illustration | Grab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Grab.png) | ![illustration for Grab](../../simpleicons-7/G/Grab.Local.png) |




## Grab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Grab
include('simpleicons-7/G/Grab')

' renders the element
Grab('Grab', 'Grab', 'an optional tech label')
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

' loads the Item which embeds the element Grab
include('simpleicons-7/G/Grab')

' renders the element
Grab('Grab', 'Grab', 'an optional tech label')
@enduml
```

