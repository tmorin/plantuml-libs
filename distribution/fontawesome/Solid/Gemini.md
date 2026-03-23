# Gemini


```text
fontawesome/Solid/Gemini
```

```text
include('fontawesome/Solid/Gemini')
```



| Illustration | Gemini |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gemini.png) | ![illustration for Gemini](../../fontawesome/Solid/Gemini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeminiXs>`
- `<$GeminiSm>`
- `<$GeminiMd>`
- `<$GeminiLg>`





## Gemini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gemini
include('fontawesome/Solid/Gemini')

' renders the element
Gemini('Gemini', 'Gemini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gemini
include('fontawesome/Solid/Gemini')

' renders the element
Gemini('Gemini', 'Gemini', 'an optional tech label', 'an optional description')
@enduml
```

