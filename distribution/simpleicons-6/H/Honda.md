# Honda


```text
simpleicons-6/H/Honda
```

```text
include('simpleicons-6/H/Honda')
```



| Illustration | Honda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Honda.png) | ![illustration for Honda](../../simpleicons-6/H/Honda.Local.png) |




## Honda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Honda
include('simpleicons-6/H/Honda')

' renders the element
Honda('Honda', 'Honda', 'an optional tech label')
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

' loads the Item which embeds the element Honda
include('simpleicons-6/H/Honda')

' renders the element
Honda('Honda', 'Honda', 'an optional tech label')
@enduml
```

