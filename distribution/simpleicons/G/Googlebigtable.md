# Googlebigtable


```text
simpleicons/G/Googlebigtable
```

```text
include('simpleicons/G/Googlebigtable')
```



| Illustration | Googlebigtable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googlebigtable.png) | ![illustration for Googlebigtable](../../simpleicons/G/Googlebigtable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglebigtableXs>`
- `<$GooglebigtableSm>`
- `<$GooglebigtableMd>`
- `<$GooglebigtableLg>`





## Googlebigtable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googlebigtable
include('simpleicons/G/Googlebigtable')

' renders the element
Googlebigtable('Googlebigtable', 'Googlebigtable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlebigtable
include('simpleicons/G/Googlebigtable')

' renders the element
Googlebigtable('Googlebigtable', 'Googlebigtable', 'an optional tech label', 'an optional description')
@enduml
```

