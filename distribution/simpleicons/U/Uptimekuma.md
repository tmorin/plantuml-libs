# Uptimekuma


```text
simpleicons/U/Uptimekuma
```

```text
include('simpleicons/U/Uptimekuma')
```



| Illustration | Uptimekuma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uptimekuma.png) | ![illustration for Uptimekuma](../../simpleicons/U/Uptimekuma.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UptimekumaXs>`
- `<$UptimekumaSm>`
- `<$UptimekumaMd>`
- `<$UptimekumaLg>`





## Uptimekuma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uptimekuma
include('simpleicons/U/Uptimekuma')

' renders the element
Uptimekuma('Uptimekuma', 'Uptimekuma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uptimekuma
include('simpleicons/U/Uptimekuma')

' renders the element
Uptimekuma('Uptimekuma', 'Uptimekuma', 'an optional tech label', 'an optional description')
@enduml
```

