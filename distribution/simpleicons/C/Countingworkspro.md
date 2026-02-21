# Countingworkspro


```text
simpleicons/C/Countingworkspro
```

```text
include('simpleicons/C/Countingworkspro')
```



| Illustration | Countingworkspro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Countingworkspro.png) | ![illustration for Countingworkspro](../../simpleicons/C/Countingworkspro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CountingworksproXs>`
- `<$CountingworksproSm>`
- `<$CountingworksproMd>`
- `<$CountingworksproLg>`





## Countingworkspro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Countingworkspro
include('simpleicons/C/Countingworkspro')

' renders the element
Countingworkspro('Countingworkspro', 'Countingworkspro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Countingworkspro
include('simpleicons/C/Countingworkspro')

' renders the element
Countingworkspro('Countingworkspro', 'Countingworkspro', 'an optional tech label', 'an optional description')
@enduml
```

