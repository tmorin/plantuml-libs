# Paragraph


```text
fontawesome-6/Solid/Paragraph
```

```text
include('fontawesome-6/Solid/Paragraph')
```



| Illustration | Paragraph |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Paragraph.png) | ![illustration for Paragraph](../../fontawesome-6/Solid/Paragraph.Local.png) |




## Paragraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paragraph
include('fontawesome-6/Solid/Paragraph')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paragraph
include('fontawesome-6/Solid/Paragraph')

' renders the element
Paragraph('Paragraph', 'Paragraph', 'an optional tech label')
@enduml
```

