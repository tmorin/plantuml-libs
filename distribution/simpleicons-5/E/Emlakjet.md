# Emlakjet


```text
simpleicons-5/E/Emlakjet
```

```text
include('simpleicons-5/E/Emlakjet')
```



| Illustration | Emlakjet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Emlakjet.png) | ![illustration for Emlakjet](../../simpleicons-5/E/Emlakjet.Local.png) |




## Emlakjet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Emlakjet
include('simpleicons-5/E/Emlakjet')

' renders the element
Emlakjet('Emlakjet', 'Emlakjet', 'an optional tech label')
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

' loads the Item which embeds the element Emlakjet
include('simpleicons-5/E/Emlakjet')

' renders the element
Emlakjet('Emlakjet', 'Emlakjet', 'an optional tech label')
@enduml
```

