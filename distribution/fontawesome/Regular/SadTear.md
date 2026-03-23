# SadTear


```text
fontawesome/Regular/SadTear
```

```text
include('fontawesome/Regular/SadTear')
```



| Illustration | SadTear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/SadTear.png) | ![illustration for SadTear](../../fontawesome/Regular/SadTear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SadTearXs>`
- `<$SadTearSm>`
- `<$SadTearMd>`
- `<$SadTearLg>`





## SadTear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SadTear
include('fontawesome/Regular/SadTear')

' renders the element
SadTear('SadTear', 'Sad Tear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SadTear
include('fontawesome/Regular/SadTear')

' renders the element
SadTear('SadTear', 'Sad Tear', 'an optional tech label', 'an optional description')
@enduml
```

