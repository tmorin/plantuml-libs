# Try


```text
fontawesome/Solid/Try
```

```text
include('fontawesome/Solid/Try')
```



| Illustration | Try |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Try.png) | ![illustration for Try](../../fontawesome/Solid/Try.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TryXs>`
- `<$TrySm>`
- `<$TryMd>`
- `<$TryLg>`





## Try

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Try
include('fontawesome/Solid/Try')

' renders the element
Try('Try', 'Try', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Try
include('fontawesome/Solid/Try')

' renders the element
Try('Try', 'Try', 'an optional tech label', 'an optional description')
@enduml
```

