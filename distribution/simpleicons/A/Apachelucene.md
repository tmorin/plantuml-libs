# Apachelucene


```text
simpleicons/A/Apachelucene
```

```text
include('simpleicons/A/Apachelucene')
```



| Illustration | Apachelucene |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachelucene.png) | ![illustration for Apachelucene](../../simpleicons/A/Apachelucene.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheluceneXs>`
- `<$ApacheluceneSm>`
- `<$ApacheluceneMd>`
- `<$ApacheluceneLg>`





## Apachelucene

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachelucene
include('simpleicons/A/Apachelucene')

' renders the element
Apachelucene('Apachelucene', 'Apachelucene', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachelucene
include('simpleicons/A/Apachelucene')

' renders the element
Apachelucene('Apachelucene', 'Apachelucene', 'an optional tech label', 'an optional description')
@enduml
```

