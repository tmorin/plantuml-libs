# Italic


```text
fontawesome/Solid/Italic
```

```text
include('fontawesome/Solid/Italic')
```



| Illustration | Italic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Italic.png) | ![illustration for Italic](../../fontawesome/Solid/Italic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItalicXs>`
- `<$ItalicSm>`
- `<$ItalicMd>`
- `<$ItalicLg>`





## Italic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Italic
include('fontawesome/Solid/Italic')

' renders the element
Italic('Italic', 'Italic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Italic
include('fontawesome/Solid/Italic')

' renders the element
Italic('Italic', 'Italic', 'an optional tech label', 'an optional description')
@enduml
```

