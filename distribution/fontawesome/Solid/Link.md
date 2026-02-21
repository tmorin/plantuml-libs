# Link


```text
fontawesome/Solid/Link
```

```text
include('fontawesome/Solid/Link')
```



| Illustration | Link |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Link.png) | ![illustration for Link](../../fontawesome/Solid/Link.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinkXs>`
- `<$LinkSm>`
- `<$LinkMd>`
- `<$LinkLg>`





## Link

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Link
include('fontawesome/Solid/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Link
include('fontawesome/Solid/Link')

' renders the element
Link('Link', 'Link', 'an optional tech label', 'an optional description')
@enduml
```

