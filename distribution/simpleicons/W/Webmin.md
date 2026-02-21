# Webmin


```text
simpleicons/W/Webmin
```

```text
include('simpleicons/W/Webmin')
```



| Illustration | Webmin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webmin.png) | ![illustration for Webmin](../../simpleicons/W/Webmin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebminXs>`
- `<$WebminSm>`
- `<$WebminMd>`
- `<$WebminLg>`





## Webmin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webmin
include('simpleicons/W/Webmin')

' renders the element
Webmin('Webmin', 'Webmin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webmin
include('simpleicons/W/Webmin')

' renders the element
Webmin('Webmin', 'Webmin', 'an optional tech label', 'an optional description')
@enduml
```

