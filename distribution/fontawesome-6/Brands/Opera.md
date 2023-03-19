# Opera


```text
fontawesome-6/Brands/Opera
```

```text
include('fontawesome-6/Brands/Opera')
```



| Illustration | Opera |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Opera.png) | ![illustration for Opera](../../fontawesome-6/Brands/Opera.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OperaXs>`
- `<$OperaSm>`
- `<$OperaMd>`
- `<$OperaLg>`





## Opera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Opera
include('fontawesome-6/Brands/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opera
include('fontawesome-6/Brands/Opera')

' renders the element
Opera('Opera', 'Opera', 'an optional tech label', 'an optional description')
@enduml
```

