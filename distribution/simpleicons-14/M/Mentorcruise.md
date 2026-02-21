# Mentorcruise


```text
simpleicons-14/M/Mentorcruise
```

```text
include('simpleicons-14/M/Mentorcruise')
```



| Illustration | Mentorcruise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mentorcruise.png) | ![illustration for Mentorcruise](../../simpleicons-14/M/Mentorcruise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MentorcruiseXs>`
- `<$MentorcruiseSm>`
- `<$MentorcruiseMd>`
- `<$MentorcruiseLg>`





## Mentorcruise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mentorcruise
include('simpleicons-14/M/Mentorcruise')

' renders the element
Mentorcruise('Mentorcruise', 'Mentorcruise', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mentorcruise
include('simpleicons-14/M/Mentorcruise')

' renders the element
Mentorcruise('Mentorcruise', 'Mentorcruise', 'an optional tech label', 'an optional description')
@enduml
```

