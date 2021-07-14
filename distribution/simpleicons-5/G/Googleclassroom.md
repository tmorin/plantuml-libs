# Googleclassroom


```text
simpleicons-5/G/Googleclassroom
```

```text
include('simpleicons-5/G/Googleclassroom')
```



| Illustration | Googleclassroom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googleclassroom.png) | ![illustration for Googleclassroom](../../simpleicons-5/G/Googleclassroom.Local.png) |




## Googleclassroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googleclassroom
include('simpleicons-5/G/Googleclassroom')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googleclassroom
include('simpleicons-5/G/Googleclassroom')

' renders the element
Googleclassroom('Googleclassroom', 'Googleclassroom', 'an optional tech label')
@enduml
```

