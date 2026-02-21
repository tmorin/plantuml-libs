# Pagerduty


```text
simpleicons/P/Pagerduty
```

```text
include('simpleicons/P/Pagerduty')
```



| Illustration | Pagerduty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pagerduty.png) | ![illustration for Pagerduty](../../simpleicons/P/Pagerduty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagerdutyXs>`
- `<$PagerdutySm>`
- `<$PagerdutyMd>`
- `<$PagerdutyLg>`





## Pagerduty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pagerduty
include('simpleicons/P/Pagerduty')

' renders the element
Pagerduty('Pagerduty', 'Pagerduty', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pagerduty
include('simpleicons/P/Pagerduty')

' renders the element
Pagerduty('Pagerduty', 'Pagerduty', 'an optional tech label', 'an optional description')
@enduml
```

