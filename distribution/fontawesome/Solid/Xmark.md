# Xmark


```text
fontawesome/Solid/Xmark
```

```text
include('fontawesome/Solid/Xmark')
```



| Illustration | Xmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Xmark.png) | ![illustration for Xmark](../../fontawesome/Solid/Xmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XmarkXs>`
- `<$XmarkSm>`
- `<$XmarkMd>`
- `<$XmarkLg>`





## Xmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Xmark
include('fontawesome/Solid/Xmark')

' renders the element
Xmark('Xmark', 'Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xmark
include('fontawesome/Solid/Xmark')

' renders the element
Xmark('Xmark', 'Xmark', 'an optional tech label', 'an optional description')
@enduml
```

