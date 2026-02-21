# UsersBetweenLines


```text
fontawesome/Solid/UsersBetweenLines
```

```text
include('fontawesome/Solid/UsersBetweenLines')
```



| Illustration | UsersBetweenLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersBetweenLines.png) | ![illustration for UsersBetweenLines](../../fontawesome/Solid/UsersBetweenLines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersBetweenLinesXs>`
- `<$UsersBetweenLinesSm>`
- `<$UsersBetweenLinesMd>`
- `<$UsersBetweenLinesLg>`





## UsersBetweenLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersBetweenLines
include('fontawesome/Solid/UsersBetweenLines')

' renders the element
UsersBetweenLines('UsersBetweenLines', 'Users Between Lines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersBetweenLines
include('fontawesome/Solid/UsersBetweenLines')

' renders the element
UsersBetweenLines('UsersBetweenLines', 'Users Between Lines', 'an optional tech label', 'an optional description')
@enduml
```

