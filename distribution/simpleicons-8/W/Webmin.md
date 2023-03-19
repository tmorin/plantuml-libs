# Webmin


```text
simpleicons-8/W/Webmin
```

```text
include('simpleicons-8/W/Webmin')
```



| Illustration | Webmin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Webmin.png) | ![illustration for Webmin](../../simpleicons-8/W/Webmin.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webmin
include('simpleicons-8/W/Webmin')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Webmin
include('simpleicons-8/W/Webmin')

' renders the element
Webmin('Webmin', 'Webmin', 'an optional tech label', 'an optional description')
@enduml
```

