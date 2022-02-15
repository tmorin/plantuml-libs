# Googleclassroom


```text
simpleicons-6/G/Googleclassroom
```

```text
include('simpleicons-6/G/Googleclassroom')
```



| Illustration | Googleclassroom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googleclassroom.png) | ![illustration for Googleclassroom](../../simpleicons-6/G/Googleclassroom.Local.png) |




## Googleclassroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googleclassroom
include('simpleicons-6/G/Googleclassroom')

' renders the element
Googleclassroom('Googleclassroom', 'Googleclassroom', 'an optional tech label')
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

' loads the Item which embeds the element Googleclassroom
include('simpleicons-6/G/Googleclassroom')

' renders the element
Googleclassroom('Googleclassroom', 'Googleclassroom', 'an optional tech label')
@enduml
```

