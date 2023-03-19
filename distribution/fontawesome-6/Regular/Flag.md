# Flag


```text
fontawesome-6/Regular/Flag
```

```text
include('fontawesome-6/Regular/Flag')
```



| Illustration | Flag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Flag.png) | ![illustration for Flag](../../fontawesome-6/Regular/Flag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlagXs>`
- `<$FlagSm>`
- `<$FlagMd>`
- `<$FlagLg>`





## Flag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Flag
include('fontawesome-6/Regular/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Flag
include('fontawesome-6/Regular/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label', 'an optional description')
@enduml
```

