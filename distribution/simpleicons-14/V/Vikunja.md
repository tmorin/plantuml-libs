# Vikunja


```text
simpleicons-14/V/Vikunja
```

```text
include('simpleicons-14/V/Vikunja')
```



| Illustration | Vikunja |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vikunja.png) | ![illustration for Vikunja](../../simpleicons-14/V/Vikunja.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VikunjaXs>`
- `<$VikunjaSm>`
- `<$VikunjaMd>`
- `<$VikunjaLg>`





## Vikunja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vikunja
include('simpleicons-14/V/Vikunja')

' renders the element
Vikunja('Vikunja', 'Vikunja', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vikunja
include('simpleicons-14/V/Vikunja')

' renders the element
Vikunja('Vikunja', 'Vikunja', 'an optional tech label', 'an optional description')
@enduml
```

