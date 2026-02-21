# Otter


```text
fontawesome/Solid/Otter
```

```text
include('fontawesome/Solid/Otter')
```



| Illustration | Otter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Otter.png) | ![illustration for Otter](../../fontawesome/Solid/Otter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OtterXs>`
- `<$OtterSm>`
- `<$OtterMd>`
- `<$OtterLg>`





## Otter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Otter
include('fontawesome/Solid/Otter')

' renders the element
Otter('Otter', 'Otter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Otter
include('fontawesome/Solid/Otter')

' renders the element
Otter('Otter', 'Otter', 'an optional tech label', 'an optional description')
@enduml
```

