# Baseball


```text
fontawesome/Solid/Baseball
```

```text
include('fontawesome/Solid/Baseball')
```



| Illustration | Baseball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Baseball.png) | ![illustration for Baseball](../../fontawesome/Solid/Baseball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaseballXs>`
- `<$BaseballSm>`
- `<$BaseballMd>`
- `<$BaseballLg>`





## Baseball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Baseball
include('fontawesome/Solid/Baseball')

' renders the element
Baseball('Baseball', 'Baseball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Baseball
include('fontawesome/Solid/Baseball')

' renders the element
Baseball('Baseball', 'Baseball', 'an optional tech label', 'an optional description')
@enduml
```

