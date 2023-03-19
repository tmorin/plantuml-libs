# Googleanalytics


```text
simpleicons-8/G/Googleanalytics
```

```text
include('simpleicons-8/G/Googleanalytics')
```



| Illustration | Googleanalytics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googleanalytics.png) | ![illustration for Googleanalytics](../../simpleicons-8/G/Googleanalytics.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogleanalyticsXs>`
- `<$GoogleanalyticsSm>`
- `<$GoogleanalyticsMd>`
- `<$GoogleanalyticsLg>`





## Googleanalytics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleanalytics
include('simpleicons-8/G/Googleanalytics')

' renders the element
Googleanalytics('Googleanalytics', 'Googleanalytics', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googleanalytics
include('simpleicons-8/G/Googleanalytics')

' renders the element
Googleanalytics('Googleanalytics', 'Googleanalytics', 'an optional tech label', 'an optional description')
@enduml
```

