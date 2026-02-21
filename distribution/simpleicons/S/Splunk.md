# Splunk


```text
simpleicons/S/Splunk
```

```text
include('simpleicons/S/Splunk')
```



| Illustration | Splunk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Splunk.png) | ![illustration for Splunk](../../simpleicons/S/Splunk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SplunkXs>`
- `<$SplunkSm>`
- `<$SplunkMd>`
- `<$SplunkLg>`





## Splunk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Splunk
include('simpleicons/S/Splunk')

' renders the element
Splunk('Splunk', 'Splunk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Splunk
include('simpleicons/S/Splunk')

' renders the element
Splunk('Splunk', 'Splunk', 'an optional tech label', 'an optional description')
@enduml
```

