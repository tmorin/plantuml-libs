# Namuwiki


```text
simpleicons/N/Namuwiki
```

```text
include('simpleicons/N/Namuwiki')
```



| Illustration | Namuwiki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Namuwiki.png) | ![illustration for Namuwiki](../../simpleicons/N/Namuwiki.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NamuwikiXs>`
- `<$NamuwikiSm>`
- `<$NamuwikiMd>`
- `<$NamuwikiLg>`





## Namuwiki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Namuwiki
include('simpleicons/N/Namuwiki')

' renders the element
Namuwiki('Namuwiki', 'Namuwiki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Namuwiki
include('simpleicons/N/Namuwiki')

' renders the element
Namuwiki('Namuwiki', 'Namuwiki', 'an optional tech label', 'an optional description')
@enduml
```

