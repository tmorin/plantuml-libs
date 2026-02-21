# CallEnd


```text
material/Communication/CallEnd
```

```text
include('material/Communication/CallEnd')
```



| Illustration | CallEnd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/CallEnd.png) | ![illustration for CallEnd](../../material/Communication/CallEnd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CallEndXs>`
- `<$CallEndSm>`
- `<$CallEndMd>`
- `<$CallEndLg>`





## CallEnd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CallEnd
include('material/Communication/CallEnd')

' renders the element
CallEnd('CallEnd', 'Call End', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CallEnd
include('material/Communication/CallEnd')

' renders the element
CallEnd('CallEnd', 'Call End', 'an optional tech label', 'an optional description')
@enduml
```

