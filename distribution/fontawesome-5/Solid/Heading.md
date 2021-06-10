# Heading


```text
fontawesome-5/Solid/Heading
```

```text
include('fontawesome-5/Solid/Heading')
```



| Illustration | Heading |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Heading.png) | ![illustration for Heading](../../fontawesome-5/Solid/Heading.Local.png) |




## Heading

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Heading
include('fontawesome-5/Solid/Heading')

' renders the element
Heading('Heading', 'Heading', 'an optional tech label')
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

' loads the Item which embeds the element Heading
include('fontawesome-5/Solid/Heading')

' renders the element
Heading('Heading', 'Heading', 'an optional tech label')
@enduml
```

