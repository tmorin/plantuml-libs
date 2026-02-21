# Apacheparquet


```text
simpleicons/A/Apacheparquet
```

```text
include('simpleicons/A/Apacheparquet')
```



| Illustration | Apacheparquet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apacheparquet.png) | ![illustration for Apacheparquet](../../simpleicons/A/Apacheparquet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheparquetXs>`
- `<$ApacheparquetSm>`
- `<$ApacheparquetMd>`
- `<$ApacheparquetLg>`





## Apacheparquet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apacheparquet
include('simpleicons/A/Apacheparquet')

' renders the element
Apacheparquet('Apacheparquet', 'Apacheparquet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apacheparquet
include('simpleicons/A/Apacheparquet')

' renders the element
Apacheparquet('Apacheparquet', 'Apacheparquet', 'an optional tech label', 'an optional description')
@enduml
```

