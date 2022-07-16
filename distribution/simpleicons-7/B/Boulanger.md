# Boulanger


```text
simpleicons-7/B/Boulanger
```

```text
include('simpleicons-7/B/Boulanger')
```



| Illustration | Boulanger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Boulanger.png) | ![illustration for Boulanger](../../simpleicons-7/B/Boulanger.Local.png) |




## Boulanger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Boulanger
include('simpleicons-7/B/Boulanger')

' renders the element
Boulanger('Boulanger', 'Boulanger', 'an optional tech label')
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

' loads the Item which embeds the element Boulanger
include('simpleicons-7/B/Boulanger')

' renders the element
Boulanger('Boulanger', 'Boulanger', 'an optional tech label')
@enduml
```

