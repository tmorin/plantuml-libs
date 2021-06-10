# Paragraph


```text
fontawesome-5/Solid/Paragraph
```

```text
include('fontawesome-5/Solid/Paragraph')
```



| Illustration | Paragraph |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Paragraph.png) | ![illustration for Paragraph](../../fontawesome-5/Solid/Paragraph.Local.png) |




## Paragraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paragraph
include('fontawesome-5/Solid/Paragraph')

' renders the element
Paragraph('Paragraph', 'Paragraph', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Paragraph
include('fontawesome-5/Solid/Paragraph')

' renders the element
Paragraph('Paragraph', 'Paragraph', 'an optional tech label')
@enduml
```

