# Googleclassroom


```text
simpleicons-8/G/Googleclassroom
```

```text
include('simpleicons-8/G/Googleclassroom')
```



| Illustration | Googleclassroom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleclassroom.png) | ![illustration for Googleclassroom](../../simpleicons-8/G/Googleclassroom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleclassroomXs>`
- `<$GoogleclassroomSm>`
- `<$GoogleclassroomMd>`
- `<$GoogleclassroomLg>`





## Googleclassroom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleclassroom
include('simpleicons-8/G/Googleclassroom')

' renders the element
Googleclassroom('Googleclassroom', 'Googleclassroom', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleclassroom
include('simpleicons-8/G/Googleclassroom')

' renders the element
Googleclassroom('Googleclassroom', 'Googleclassroom', 'an optional tech label', 'an optional description')
@enduml
```

