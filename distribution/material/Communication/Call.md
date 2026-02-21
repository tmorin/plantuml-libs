# Call


```text
material/Communication/Call
```

```text
include('material/Communication/Call')
```



| Illustration | Call |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Call.png) | ![illustration for Call](../../material/Communication/Call.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallXs>`
- `<$CallSm>`
- `<$CallMd>`
- `<$CallLg>`





## Call

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Call
include('material/Communication/Call')

' renders the element
Call('Call', 'Call', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Call
include('material/Communication/Call')

' renders the element
Call('Call', 'Call', 'an optional tech label', 'an optional description')
@enduml
```

