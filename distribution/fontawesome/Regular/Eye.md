# Eye


```text
fontawesome/Regular/Eye
```

```text
include('fontawesome/Regular/Eye')
```



| Illustration | Eye |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Eye.png) | ![illustration for Eye](../../fontawesome/Regular/Eye.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EyeXs>`
- `<$EyeSm>`
- `<$EyeMd>`
- `<$EyeLg>`





## Eye

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eye
include('fontawesome/Regular/Eye')

' renders the element
Eye('Eye', 'Eye', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eye
include('fontawesome/Regular/Eye')

' renders the element
Eye('Eye', 'Eye', 'an optional tech label', 'an optional description')
@enduml
```

