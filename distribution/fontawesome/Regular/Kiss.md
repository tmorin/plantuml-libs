# Kiss


```text
fontawesome/Regular/Kiss
```

```text
include('fontawesome/Regular/Kiss')
```



| Illustration | Kiss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Kiss.png) | ![illustration for Kiss](../../fontawesome/Regular/Kiss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KissXs>`
- `<$KissSm>`
- `<$KissMd>`
- `<$KissLg>`





## Kiss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Kiss
include('fontawesome/Regular/Kiss')

' renders the element
Kiss('Kiss', 'Kiss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kiss
include('fontawesome/Regular/Kiss')

' renders the element
Kiss('Kiss', 'Kiss', 'an optional tech label', 'an optional description')
@enduml
```

