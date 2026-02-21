# Yahoo


```text
fontawesome/Brands/Yahoo
```

```text
include('fontawesome/Brands/Yahoo')
```



| Illustration | Yahoo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Yahoo.png) | ![illustration for Yahoo](../../fontawesome/Brands/Yahoo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YahooXs>`
- `<$YahooSm>`
- `<$YahooMd>`
- `<$YahooLg>`





## Yahoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Yahoo
include('fontawesome/Brands/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yahoo
include('fontawesome/Brands/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label', 'an optional description')
@enduml
```

