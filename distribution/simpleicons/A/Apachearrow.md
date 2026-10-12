# Apachearrow


```text
simpleicons/A/Apachearrow
```

```text
include('simpleicons/A/Apachearrow')
```



| Illustration | Apachearrow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachearrow.png) | ![illustration for Apachearrow](../../simpleicons/A/Apachearrow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachearrowXs>`
- `<$ApachearrowSm>`
- `<$ApachearrowMd>`
- `<$ApachearrowLg>`





## Apachearrow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachearrow
include('simpleicons/A/Apachearrow')

' renders the element
Apachearrow('Apachearrow', 'Apachearrow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachearrow
include('simpleicons/A/Apachearrow')

' renders the element
Apachearrow('Apachearrow', 'Apachearrow', 'an optional tech label', 'an optional description')
@enduml
```

