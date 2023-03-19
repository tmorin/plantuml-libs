# Democrat


```text
fontawesome-6/Solid/Democrat
```

```text
include('fontawesome-6/Solid/Democrat')
```



| Illustration | Democrat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Democrat.png) | ![illustration for Democrat](../../fontawesome-6/Solid/Democrat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DemocratXs>`
- `<$DemocratSm>`
- `<$DemocratMd>`
- `<$DemocratLg>`





## Democrat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Democrat
include('fontawesome-6/Solid/Democrat')

' renders the element
Democrat('Democrat', 'Democrat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Democrat
include('fontawesome-6/Solid/Democrat')

' renders the element
Democrat('Democrat', 'Democrat', 'an optional tech label', 'an optional description')
@enduml
```

