# Fandango


```text
simpleicons-6/F/Fandango
```

```text
include('simpleicons-6/F/Fandango')
```



| Illustration | Fandango |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fandango.png) | ![illustration for Fandango](../../simpleicons-6/F/Fandango.Local.png) |




## Fandango

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fandango
include('simpleicons-6/F/Fandango')

' renders the element
Fandango('Fandango', 'Fandango', 'an optional tech label')
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

' loads the Item which embeds the element Fandango
include('simpleicons-6/F/Fandango')

' renders the element
Fandango('Fandango', 'Fandango', 'an optional tech label')
@enduml
```

