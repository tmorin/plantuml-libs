# Indent


```text
fontawesome/Solid/Indent
```

```text
include('fontawesome/Solid/Indent')
```



| Illustration | Indent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Indent.png) | ![illustration for Indent](../../fontawesome/Solid/Indent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IndentXs>`
- `<$IndentSm>`
- `<$IndentMd>`
- `<$IndentLg>`





## Indent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Indent
include('fontawesome/Solid/Indent')

' renders the element
Indent('Indent', 'Indent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Indent
include('fontawesome/Solid/Indent')

' renders the element
Indent('Indent', 'Indent', 'an optional tech label', 'an optional description')
@enduml
```

