# Apachekafka


```text
simpleicons/A/Apachekafka
```

```text
include('simpleicons/A/Apachekafka')
```



| Illustration | Apachekafka |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Apachekafka.png) | ![illustration for Apachekafka](../../simpleicons/A/Apachekafka.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachekafkaXs>`
- `<$ApachekafkaSm>`
- `<$ApachekafkaMd>`
- `<$ApachekafkaLg>`





## Apachekafka

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Apachekafka
include('simpleicons/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachekafka
include('simpleicons/A/Apachekafka')

' renders the element
Apachekafka('Apachekafka', 'Apachekafka', 'an optional tech label', 'an optional description')
@enduml
```

